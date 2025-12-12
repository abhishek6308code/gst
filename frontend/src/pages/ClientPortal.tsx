import { useState, useEffect } from 'react';
import { FileText, Download, Calendar, User, Building, Phone, Mail } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, Document } from '../lib/supabase';
import { SEO } from '../components/SEO';

interface ClientPortalProps {
  onNavigate: (page: string) => void;
}

export function ClientPortal({ onNavigate }: ClientPortalProps) {
  const { user, profile, loading: authLoading } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'profile'>('overview');

  useEffect(() => {
    if (!authLoading && !user) {
      onNavigate('login');
    }
  }, [user, authLoading, onNavigate]);

  useEffect(() => {
    if (user) {
      loadDocuments();
    }
  }, [user]);

  const loadDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('user_id', user?.id)
        .order('uploaded_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error loading documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDocumentTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      gst_return: 'GST Return',
      invoice: 'Invoice',
      tax_document: 'Tax Document',
      payroll: 'Payroll',
      financial_report: 'Financial Report',
      other: 'Other',
    };
    return labels[type] || type;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  return (
    <>
      <SEO
        title="Client Portal"
        description="Access your GST documents, financial reports, and account information"
      />

      <section className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Portal</h1>
            <p className="text-gray-600">Welcome back, {profile.full_name}!</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="flex border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                  activeTab === 'overview'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                  activeTab === 'documents'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Documents
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                  activeTab === 'profile'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Profile
              </button>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Total Documents</h3>
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{documents.length}</p>
                  <p className="text-sm text-gray-600 mt-2">Uploaded documents</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Account Status</h3>
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-3xl font-bold text-green-600">Active</p>
                  <p className="text-sm text-gray-600 mt-2">Since {formatDate(profile.created_at)}</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Recent Activity</h3>
                    <Calendar className="w-8 h-8 text-orange-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {documents.length > 0 ? formatDate(documents[0].uploaded_at) : 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Last document upload</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Documents</h3>
                {loading ? (
                  <p className="text-gray-600">Loading documents...</p>
                ) : documents.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No documents uploaded yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {documents.slice(0, 5).map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">{doc.title}</p>
                            <p className="text-sm text-gray-600">
                              {getDocumentTypeLabel(doc.file_type)} • {formatDate(doc.uploaded_at)}
                            </p>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 flex-shrink-0">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">All Documents</h2>
                <p className="text-gray-600">Access and download your financial documents</p>
              </div>

              {loading ? (
                <p className="text-gray-600">Loading documents...</p>
              ) : documents.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">No documents available</p>
                  <p className="text-sm text-gray-500">
                    Your documents will appear here once uploaded by our team
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Document Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Size
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold text-gray-900">{doc.title}</p>
                              {doc.description && (
                                <p className="text-sm text-gray-600">{doc.description}</p>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {getDocumentTypeLabel(doc.file_type)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {formatFileSize(doc.file_size)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {formatDate(doc.uploaded_at)}
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-2">
                              <Download className="w-4 h-4" />
                              <span>Download</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4" />
                      <span>Full Name</span>
                    </label>
                    <p className="text-gray-900">{profile.full_name}</p>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Address</span>
                    </label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4" />
                      <span>Phone Number</span>
                    </label>
                    <p className="text-gray-900">{profile.phone}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.business_name && (
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                        <Building className="w-4 h-4" />
                        <span>Business Name</span>
                      </label>
                      <p className="text-gray-900">{profile.business_name}</p>
                    </div>
                  )}

                  {profile.gstin && (
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        GSTIN
                      </label>
                      <p className="text-gray-900">{profile.gstin}</p>
                    </div>
                  )}

                  <div>
                    <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Member Since</span>
                    </label>
                    <p className="text-gray-900">{formatDate(profile.created_at)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Need to update your information? Contact our support team.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
