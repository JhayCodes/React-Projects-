import {useState} from 'react';
import {FaMapMarker} from 'react-icons/fa'

const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if(!showFullDescription) {
        description = description.substring(0, 90) + "...";
    }
}

export default JobListing;