"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  User,
  BookOpen,
  Briefcase,
  Linkedin,
  Github,
  Globe,
  Building2,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import axios from "axios";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [role, setRole] = useState("STUDENT");
  const [userType, setUserType] = useState<"STUDENT" | "ALUMNI" | string>("STUDENT");

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    batch: "",
    role: "",
    linkedin: "",
    github: "",
    website: "",
    organisation: "",
    bio: "",
  });

  useEffect(() => {
    const r = localStorage.getItem("role");
    if (r) setRole(r);
  }, []);

  useEffect(() => {
    setUserType(role);
  }, [role]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const profile = response.data;

        setUserType(profile.userType || userType);

        setFormData({
          ...formData,
          ...profile,
          organisation: profile.organisation?.name || "",
        });
      } catch (err: any) {
        setError("Failed to load profile.");
        setFormData({
          email: "alex.johnson@alumni.edu",
          name: "Alex Johnson",
          batch: "2020",
          role: "Alumni",
          linkedin: "linkedin.com/in/alexjohnson",
          github: "github.com/alexjohnson",
          website: "alexjohnson.dev",
          organisation: "Tech Innovations",
          bio: "Passionate engineer.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError(null);
      setSuccess(null);

      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/edit`,
        { ...formData, userType },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setSuccess("Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setSuccess(null), 2500);
    } catch (err) {
      setError("Failed to save changes.");
    } finally {
      setIsSaving(false);
    }
  };

  const basicFields = [
    { label: "Email", name: "email", icon: Mail },
    { label: "Full Name", name: "name", icon: User },
    { label: "Batch", name: "batch", icon: BookOpen },
    { label: "Role", name: "role", icon: Briefcase },
  ];

  const professionalFields = [
    { label: "LinkedIn", name: "linkedin", icon: Linkedin },
    { label: "GitHub", name: "github", icon: Github },
    { label: "Website", name: "website", icon: Globe },
    { label: "Organisation", name: "organisation", icon: Building2 },
  ];

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin w-12 h-12 border-4 border-purple-600/30 border-t-purple-500 rounded-full" />
      </main>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-28 right-32 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-28 left-32 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-900/30 border border-red-700/40 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <p className="text-red-200">{error}</p>
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="flex items-center gap-3 p-4 bg-green-900/30 border border-green-700/40 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <p className="text-green-200">{success}</p>
          </div>
        )}

        {/* BASIC INFO */}
        <section className="bg-black/40 border border-purple-800/30 rounded-2xl p-8 shadow-lg shadow-purple-900/10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Account Information</h3>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-5 py-2 bg-purple-600/80 hover:bg-purple-600 rounded-lg font-semibold transition-all"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {basicFields.map((field) => {
              const Icon = field.icon;
              const value = formData[field.name as keyof typeof formData];

              return (
                <div key={field.name} className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                    <Icon className="w-4 h-4" />
                    {field.label}
                  </label>

                  {isEditing ? (
                    <input
                      type="text"
                      name={field.name}
                      value={value}
                      readOnly={field.name === "role"}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-purple-700/50 rounded-lg"
                    />
                  ) : (
                    <div className="w-full px-4 py-3 bg-black/30 border border-purple-700/30 rounded-lg text-white/80">
                      {value || "—"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ALUMNI ONLY SECTION */}
        {userType === "ALUMNI" && (
          <section className="bg-black/40 border border-purple-800/30 rounded-2xl p-8 shadow-lg shadow-purple-900/10">
            <h3 className="text-2xl font-bold mb-8">Professional Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {professionalFields.map((field) => {
                const Icon = field.icon;
                const value = formData[field.name as keyof typeof formData];

                return (
                  <div key={field.name} className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                      <Icon className="w-4 h-4" />
                      {field.label}
                    </label>

                    {isEditing ? (
                      <input
                        type="text"
                        name={field.name}
                        value={value}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/40 border border-purple-700/50 rounded-lg"
                      />
                    ) : (
                      <div className="w-full px-4 py-3 bg-black/30 border border-purple-700/30 rounded-lg text-white/80">
                        {value || "—"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-purple-300">
                <FileText className="w-4 h-4" />
                Bio
              </label>

              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-purple-700/50 rounded-lg resize-none"
                />
              ) : (
                <div className="px-4 py-3 bg-black/30 border border-purple-700/30 rounded-lg text-white/80">
                  {formData.bio || "—"}
                </div>
              )}
            </div>
          </section>
        )}

        {/* SAVE BUTTONS */}
        {isEditing && (
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold shadow-lg shadow-purple-700/30 transition"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>

            <button
              onClick={() => setIsEditing(false)}
              disabled={isSaving}
              className="flex-1 py-3 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-700/40 rounded-lg font-semibold transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
