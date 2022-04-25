import { differenceInMinutes } from "date-fns";
import { differenceInHours } from "date-fns";
import { differenceInCalendarDays } from "date-fns";
import "./NewsCard.css";
import { FaCaretUp } from "react-icons/fa";

const NewsCard = ({ data, index }) => {
  let domain = "";
  if (data.url) {
    domain = new URL(data.url);
    domain = domain.hostname.replace("www.", "");
  }
  let timeDiff = 0;
  const diffMin = differenceInMinutes(new Date(), new Date(data.created_at), "floor");
  const diffHours = differenceInHours(new Date(), new Date(data.created_at), "floor");
  const diffDays = differenceInCalendarDays(new Date(), new Date(data.created_at));
  if (diffMin < 60) {
    timeDiff = `${diffMin} minutes ago`;
  } else if (diffHours < 24) {
    timeDiff = `${diffHours} hours ago`;
  } else {
    timeDiff = `${diffDays} days ago`;
  }

  return (
    <div className="news-card" key={index}>
      <span>{index + 1}. </span>
      <FaCaretUp icon="fa-duotone fa-caret-up" className="upvote" />
      <a className="title-link" href={data.url}>
        {data.title}
      </a>
      <a className="domain-link" href={domain}>
        ({domain}){" "}
      </a>
      <div className="news-info">
        <span className="news-infopoints">{data.points} points </span>
        <span className="news-infopoints">by {data.author} </span>
        <span className="news-infopoints">{timeDiff}</span>
        <span className="news-infopoints">| hide</span>
        <span className="news-infopoints">
          | {data.num_comments} {data.num_comments === 1 ? "comment" : "comments"}
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
