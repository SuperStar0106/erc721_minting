import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const url = process.env.NEXT_PUBLIC_PINATA_API_URL;
const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;

interface PinataResponse {
  IpfsHash: string;
}

interface PinIPFSResponse {
  success: boolean;
  pinataUrl?: string;
  message?: string;
}

export const pinFileToIPFS = async (file: File): Promise<PinIPFSResponse> => {
  let data = new FormData();
  data.append('file', file);

  if (!url) {
    throw new Error('url is not set');
  }

  return axios.post(url + '/pinFileToIPFS', data, {
    headers: {
      'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
      'pinata_api_key': pinataApiKey,
      'pinata_secret_api_key': pinataSecretApiKey
    }
  }).then(function (response) {
    return {
      success: true,
      pinataUrl: response.data.IpfsHash,
    };
  }).catch(function (error) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  });
};

export const pinJSONToIPFS = async (JSONBody: any): Promise<PinIPFSResponse> => {
  if (!url) {
    throw new Error('url is not set');
  }

  return axios.post(url + '/pinJSONToIPFS', JSONBody, {
    headers: {
      'Content-Type': `application/json`,
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
      'pinata_api_key': pinataApiKey,
      'pinata_secret_api_key': pinataSecretApiKey
    }
  }).then(function (response) {
    return {
      success: true,
      pinataUrl: response.data.IpfsHash,
    };
  }).catch(function (error) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  });
};
