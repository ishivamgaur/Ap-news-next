import { useState, useEffect } from "react";
import { BiPhone } from "react-icons/bi";
import {
  FaTimes,
  FaUpload,
  FaVideo,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFilePdf,
  FaPlay,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import apiClient from "../api";

const JoinTeamPopup = ({ isOpen, onClose, language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "Bihar",
    district: "",
    resume: null,
    demoVideo: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error'
  const [submissionMessage, setSubmissionMessage] = useState("");

  const districtsOfBihar = [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Reset submission status on new submission attempt
    setSubmissionStatus(null);
    setSubmissionMessage("");

    try {
      // Create FormData object to send files
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("district", formData.district);

      if (formData.resume) formDataToSend.append("resume", formData.resume);
      if (formData.demoVideo)
        formDataToSend.append("demoVideo", formData.demoVideo);

      const response = await apiClient.post("/join-team", formDataToSend);

      console.log("Form submitted successfully:", response.data);
      setSubmissionStatus("success");
      setSubmissionMessage(
        response.data.message || "Application submitted successfully!"
      );

      // Close popup after a short delay to show success message
      setTimeout(() => {
        onClose();
        // Reset form
        setFormData({
          name: "", email: "", phone: "", state: "Bihar", district: "", resume: null, demoVideo: null,
        });
      }, 2000);
    } catch (err) {
      console.error("Error submitting form:", err);
      let errorMessage =
        err.response?.data?.message || err.message || "An unexpected error occurred.";

      // Check for MongoDB duplicate key error for the email
      const mongoError = err.response?.data?.error;
      if (typeof mongoError === 'string' && mongoError.includes("E11000") && mongoError.includes("email")) {
        errorMessage = language === "hi"
          ? "यह ईमेल पहले से पंजीकृत है। कृपया एक अलग ईमेल का उपयोग करें।"
          : "This email is already registered. Please use a different one.";
      }
      setSubmissionStatus("error");
      setSubmissionMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeFile = (fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: null,
    }));
  };

  useEffect(() => {
    if (isOpen) {
      // Reset submission status when popup opens
      setSubmissionStatus(null);
      setSubmissionMessage("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      if (!isOpen) {
        setIsSubmitting(false);
      }
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl max-w-lg w-full max-h-[95vh] overflow-auto border border-gray-200 animate-slideUp">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-700 to-red-800 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">
                {language === "hi" ? "हमसे जुड़ें" : "Join Our Team"}
              </h2>
              <p className="text-red-100 text-sm mt-1">
                {language === "hi"
                  ? "AP News में अपना करियर शुरू करें"
                  : "Start your career with AP News"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <FaUser className="text-red-700 text-xl" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-8 space-y-6 mt-4">
          {submissionStatus && (
            <div
              className={`p-4 rounded-lg text-center font-medium ${
                submissionStatus === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submissionMessage}
            </div>
          )}

          {submissionStatus !== "success" && (
            <>
          {/* Name Field */}
          <div className="group">
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <FaUser className="text-red-600 mr-2" />
              {language === "hi" ? "पूरा नाम" : "Full Name"} *
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                placeholder={
                  language === "hi"
                    ? "अपना पूरा नाम दर्ज करें"
                    : "Enter your full name"
                }
              />
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <FaEnvelope className="text-red-600 mr-2" />
              Email *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
            </div>
          </div>

          {/* Phone No. Field */}
          <div className="group">
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <FaPhoneAlt className="text-red-600 mr-2" />
              Phone No. *
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                placeholder="+91 9876543210"
              />
              <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* State Field */}
            <div className="group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <FaMapMarkerAlt className="text-red-600 mr-2" />
                {language === "hi" ? "राज्य" : "State"}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value="Bihar"
                  disabled
                  className="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 font-medium cursor-not-allowed"
                />
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* District Field */}
            <div className="group">
              <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                <FaMapMarkerAlt className="text-red-600 mr-2" />
                {language === "hi" ? "जिला" : "District"} *
              </label>
              <div className="relative">
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 bg-white appearance-none cursor-pointer"
                >
                  <option value="">
                    {language === "hi" ? "जिला चुनें" : "Select District"}
                  </option>
                  {districtsOfBihar.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="group">
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <FaFilePdf className="text-red-600 mr-2" />
              {language === "hi" ? "रिज्यूमे अपलोड करें" : "Upload Resume"} *
            </label>
            <div className="relative">
              <label className="cursor-pointer block">
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center transition-all duration-200 hover:border-red-400 hover:bg-red-50/50 group-hover:border-red-400">
                  <FaUpload className="mx-auto text-3xl text-gray-400 mb-3 group-hover:text-red-500 transition-colors" />
                  <p className="text-gray-600 font-medium">
                    {formData.resume ? (
                      <span className="text-green-600 flex items-center justify-center">
                        <FaFilePdf className="mr-2" />
                        {formData.resume.name}
                      </span>
                    ) : language === "hi" ? (
                      "रिज्यूमे अपलोड करने के लिए क्लिक करें"
                    ) : (
                      "Click to upload your resume"
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {language === "hi"
                      ? "PDF, DOC, DOCX (अधिकतम 5MB)"
                      : "PDF, DOC, DOCX (Max 5MB)"}
                  </p>
                </div>
              </label>
              {formData.resume && (
                <button
                  type="button"
                  onClick={() => removeFile("resume")}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <FaTimes size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Demo Video Upload */}
          <div className="group">
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <FaVideo className="text-red-600 mr-2" />
              {language === "hi"
                ? "डेमो वीडियो (एंकरिंग/इंटरव्यू)"
                : "Demo Video (Anchoring/Interview)"}
            </label>
            <div className="relative">
              <label className="cursor-pointer block">
                <input
                  type="file"
                  name="demoVideo"
                  onChange={handleFileChange}
                  accept="video/*"
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center transition-all duration-200 hover:border-red-400 hover:bg-red-50/50 group-hover:border-red-400">
                  <FaPlay className="mx-auto text-3xl text-gray-400 mb-3 group-hover:text-red-500 transition-colors" />
                  <p className="text-gray-600 font-medium">
                    {formData.demoVideo ? (
                      <span className="text-green-600 flex items-center justify-center">
                        <FaVideo className="mr-2" />
                        {formData.demoVideo.name}
                      </span>
                    ) : language === "hi" ? (
                      "डेमो वीडियो अपलोड करें"
                    ) : (
                      "Upload demo video"
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {language === "hi"
                      ? "आपके एंकरिंग, इंटरव्यू या रिपोर्टिंग का वीडियो"
                      : "Your anchoring, interviewing or reporting video"}
                  </p>
                </div>
              </label>
              {formData.demoVideo && (
                <button
                  type="button"
                  onClick={() => removeFile("demoVideo")}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <FaTimes size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {language === "hi" ? "रद्द करें" : "Cancel"}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-xl hover:from-red-800 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold shadow-lg shadow-red-200"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                  {language === "hi" ? "जमा हो रहा है..." : "Submitting..."}
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <FaUpload className="mr-2" />
                  {language === "hi" ? "जमा करें" : "Submit Application"}
                </div>
              )}
            </button>
          </div>
          </>
          )}
        </form>
      </div>
    </div>
  );
};

export default JoinTeamPopup;
