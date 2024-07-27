// pages/api/user/[id].js
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "./db";
import { auth } from "@clerk/nextjs";
interface UserDetails {
    fullName?: string;
    dateOfBirth?: string;
    gender?: string;
    medications?: string;
  }
export const fetchUserDetails = async () => {
    const {userId}=auth();
    if (!userId) throw new Error('User ID is required');

    const userDetails = await db.userDetails.findUnique({
      where: {
        userId,
      },
    });
  
    if (!userDetails) {
      return null;
    }
  
    return userDetails;
  };

  

  // export const updateUserDetails = async (details: UserDetails) => {
  //   const {userId} = auth(); // Retrieve user ID using auth
  //   console.log(userId);
  // if (!userId) throw new Error("User ID Is required");
  //   console.log(userId);
  //   try {
  //     const updatedUser = await db.userDetails.update({
  //       where: {
  //           userId,
  //       } ,
  //       data: {
  //         userId:userId,
  //         fullName: details.fullName,
  //         dateOfBirth: details.dateOfBirth,
  //         gender: details.gender,
  //         medications: details.medications,
  //       },
  //     });

  //     return { success: true, message: 'Profile updated successfully!' };
  //   } catch (error) {
  //     console.error('Error updating user details:', error);
  //     return { success: false, message: 'Internal Server Error' };
  //   }
  // };



  export const updateUserDetails = async (details: UserDetails) => {
    const {userId} = auth();// Retrieve user ID using auth
    
    if (!userId) {
      throw new Error("User ID is required");
    }
  
    try {
      const updatedUser = await db.userDetails.update({
        where: { userId, },
        data: {
          fullName: details.fullName,
          dateOfBirth: details.dateOfBirth,
          gender: details.gender,
          medications: details.medications,
        },
      });
  
      return { success: true, data: updatedUser };
    } catch (error) {
      console.error('Error updating user details:', error);
      return { success: false, message: 'Internal Server Error' };
    }
  };
  
  