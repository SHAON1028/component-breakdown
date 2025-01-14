type BookDetailsProps = {
    title:string,
    author:string,
    cover?:string
}



const BookDetails:React.FC<BookDetailsProps> = ({title,author,cover}) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
   {cover ?    <img src={cover} className="w-12 h-12" /> : <span className="text-gray-300">Not Found</span>}
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{author}</p>
      </div>
    </div>
  );
}
export default BookDetails