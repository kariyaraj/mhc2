"use client";
import { useEffect, useState } from 'react';
import { fetchUserDetails,  } from '@/lib/profile';
import axios from "axios";
import { Suspense } from 'react';
// import { updateUserDetails } from '@/app/api/updaterecord/route';
interface UserDetails { 
  fullName?: string;
  dateOfBirth?: string;
  gender?: string;
  medications?: string;
}
const ProfilePage = () => {
  const [details, setDetails] = useState<UserDetails>({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    medications: '',
  });


  const [user, setUser] = useState<UserDetails | null>(null); // To store user details
  const [loading, setLoading] = useState<boolean>(true); // To handle loading state
  const [error, setError] = useState<string | null>(null); 
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await postUpdateUserDetails(details);
    if (result.success) {
      // Handle success (e.g., show a success message)
      alert("Successfuly");
    } else {
      alert("Failed to update the user");
      // Handle error (e.g., show an error message)
    }
  };
  const postUpdateUserDetails = async (details: UserDetails) => {
    try {
      const response = await axios.post('/api/conversation', details);
      return response.data;
    } catch (error) {
      console.error('Error updating user details:', error);
      return { success: false, message: 'Internal Server Error' };
    }
  };
  const handleFetchUser = async () => {
    try {
      const userData = await fetchUserDetails();
  
      if (userData) {
        console.log(userData);
        const formattedUserData: UserDetails = {
          fullName: userData.fullName ?? '',
          dateOfBirth: userData.dateOfBirth ? userData.dateOfBirth.toISOString().split('T')[0] : '', // Format date for input
          gender: userData.gender ?? '',
          medications: userData.medications ?? '',
        };
        setUser(formattedUserData);
        setDetails(formattedUserData);
      }
    } catch (error) {
      setError('Failed to fetch user details');
    } finally {
      setLoading(false);
    }
  };
  handleFetchUser();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Profile Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={details.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={details.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Gender</label>
          <select
            name="gender"
            value={details.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* <div>
          <label className="block mb-1 text-gray-700">Emergency Contact</label>
          <input
            type="text"
            name="emergencyContact"
            value={details.emergencyContact}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter emergency contact details"
          />
        </div> */}
        {/* <div>
          <label className="block mb-1 text-gray-700">Therapist Name</label>
          <input
            type="text"
            name="therapistName"
            value={details.therapistName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your therapist's name"
          />
        </div> */}
        {/* <div>
          <label className="block mb-1 text-gray-700">Therapist Contact</label>
          <input
            type="text"
            name="therapistContact"
            value={details.therapistContact}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter therapist's contact details"
          />
        </div> */}

        <div>
          <label className="block mb-1 text-gray-700">Medications</label>
          <textarea
            name="medications"
            value={details.medications}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="List any medications you are taking"
          ></textarea>
        </div>
        {/* <div>
          <label className="block mb-1 text-gray-700">Allergies</label>
          <textarea
            name="allergies"
            value={details.allergies}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="List any allergies you have"
          ></textarea>
        </div> */}
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
          Update Profile
        </button>
      </form>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePage />
    </Suspense>
  )
}

export default Page
