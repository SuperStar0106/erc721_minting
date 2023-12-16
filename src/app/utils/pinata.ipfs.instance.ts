import axios from "axios";

export const pinFileToIPFS = async (file: File, pinataApiKey: string, pinataSecretApiKey: string) => {
  const url = process.env.NEXT_PUBLIC_PINATA_API_URL ? process.env.NEXT_PUBLIC_PINATA_API_URL : '';
  let data = new FormData();
  data.append('file', file);

  if (url) {
    return axios.post(url, data, {
      headers: {
        'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
        'pinata_api_key': pinataApiKey,
        'pinata_secret_api_key': pinataSecretApiKey
      }
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      throw error;
    });
  }
};

export const uploadMetadata = async (name: string, description: string, external_url: string, CID: string) => {
  const url = process.env.NEXT_PUBLIC_PINATA_API_URL ? process.env.NEXT_PUBLIC_PINATA_API_URL : '';

  try {
    const data = JSON.stringify({
      pinataContent: {
        name: `${name}`,
        description: `${description}`,
        external_url: `${external_url}`,
        image: `https://silver-added-condor-946.mypinata.cloud/ipfs/${CID}`,
      },
      pinataMetadata: {
        name: "Pinnie NFT Metadata",
      },
    });

    const res = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`
      },
    });

    return (await res).data.IpfsHash;
  } catch (error) {
    throw error;
  }
};