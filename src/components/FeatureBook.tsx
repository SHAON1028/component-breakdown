import { Star } from "lucide-react";

type FeatureBookProps = {
  featured: boolean;
};

const FeatureBook: React.FC<FeatureBookProps> = ({ featured }) => {
  return <div>{featured ? <Star fill="gold" /> : <Star />}</div>;
};
export default FeatureBook;
