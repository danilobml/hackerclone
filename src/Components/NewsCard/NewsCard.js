import { differenceInMinutes } from 'date-fns';
import { differenceInHours } from 'date-fns';
import { differenceInCalendarDays } from 'date-fns';

const NewsCard = ({data, index}) => {
    let domain = "";
    if (data.url) {
        domain = (new URL(data.url));
        domain = domain.hostname.replace('www.','');
    }
    let timeDiff = 0;
    const diffMin = differenceInMinutes(new Date(), new Date(data.created_at), "floor");
    const diffHours = differenceInHours(new Date(), new Date(data.created_at), "floor");
    const diffDays = differenceInCalendarDays(new Date(), new Date(data.created_at));
    if (diffMin < 60) {
        timeDiff = `${diffMin} minutes ago`;
    } else if (diffHours < 24) {
        timeDiff = `${diffHours} hours ago`
    } else {
        timeDiff = `${diffDays} days ago`
    }
     
    return(
    <div key={index}>
        <span>{index +1}. </span>
        <a href={data.url}>{data.title}</a>
        <span>({domain}) </span>
        <br />
        <span>{data.points} points </span>
        <span>by {data.author} </span>
        <span>{timeDiff}</span>
        <span>| hide</span>
        <span>| {data.num_comments} {data.num_comments === 1 ? "comment": "comments"}</span>

     </div>
    )
}

export default NewsCard;