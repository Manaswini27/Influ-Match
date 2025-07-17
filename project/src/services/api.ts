import axios from 'axios';
import { FlaskRequest, FlaskResponse } from '../types';

const API_BASE_URL = 'http://localhost:5000';

export const getInfluencerMatch = async (data: FlaskRequest): Promise<FlaskResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/match`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Flask API Error:', error);
    throw error;
  }
};