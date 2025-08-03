import React from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="mb-4 border-b pb-2">
            <p className="font-semibold">{review.author}</p>
            <p className="text-yellow-500">Rating: {review.rating}/5</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;
