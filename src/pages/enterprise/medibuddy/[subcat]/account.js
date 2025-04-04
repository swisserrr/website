import Account from 'containers/Account';

export const getServerSideProps = async ({ params }) => {
  const { subcat } = params;

  return {
    props: {
      subcat, // Pass the subcat dynamically to the Account component
    },
  };
};

export default function AccountPage(props) {
  return <Account {...props} />;
}
