// This page will be used to handle the consent redirections

import API_CONFIG from '../../config';

// This component will rarely be rendered since we're redirecting at the server level
export default function ConsentPage() {
  return null; // Return nothing or a minimal loading component
}

export async function getServerSideProps(context) {
  try {
    // Extract the id parameter from the URL
    const { id } = context.params;

    // Make the API request
    const response = await fetch(`${API_CONFIG.API_URL}/redirect/${id}`);

    // If the API response contains a redirect URL
    if (response.redirected) {
      return {
        redirect: {
          destination: response.url,
          permanent: false,
        },
      };
    }

    // Parse the response data to check if it contains a redirect URL
    const data = await response.json();

    // If data contains a redirectUrl field, use that
    if (data && data.redirectUrl) {
      return {
        redirect: {
          destination: data.redirectUrl,
          permanent: false,
        },
      };
    }

    // If no redirect is found, redirect to a default page or home
    return {
      redirect: {
        destination: '/', // Redirect to homepage or another default page
        permanent: false,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Redirect to error page in case of error
    return {
      redirect: {
        destination: '/404', // Create an error page
        permanent: false,
      },
    };
  }
}
