type props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function genrePage({ params: { id }, searchParams: { genre } }: props) {
  return (
    <>
      <h1>
        From Genre Page id ={id} genre={genre}{" "}
      </h1>
    </>
  );
}

export default genrePage;
