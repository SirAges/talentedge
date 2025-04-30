import { getAllReviews } from "@/lib/actions/review.actions";
import { Star } from "lucide-react";
import { use } from "react";

const Testimonial = () => {
  const reviews = use(getAllReviews({ limit: 4 }));
  return (
    <section
      id="program-select"
      className="md:px-20 px-4 py-10 flex flex-col w-full items-center space-y-5 "
    >
      <div className="flex-1 py-10 space-y-4 rounded-lg max-w-md">
        <h1 className="text-3xl md:text-4xl text-center font-semibold">
          What are people saying about us
        </h1>
        <p className="text-center">
          Our Client cant&apos;t stop talking about our services
        </p>
      </div>
      <div className="flex-1 flex flex-wrap gap-2 items-center justify-center">
        {reviews.data.map(({ id, clientName, position, review, rating }) => (
          <div
            key={id}
            className="md:w-1/3 h-56 bg-background px-4 py-4 rounded-lg cursor-pointer"
          >
            <div className="flex items-center justify-between py-2">
              <div className="px-2 text-xs space-y-2">
                <h3 className="truncate font-semibold capitalize">
                  {clientName}
                </h3>
                <p className="truncate">{position}</p>
              </div>

              <p className="flex items-center relative">
                {rating.toFixed(1)}
                <Star size={12} />
              </p>
            </div>
            <p className="border-t py-2 flex-1">{review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
