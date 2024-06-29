// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import '../../scss/SubmissionForm.scss';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// interface FormData {
//     heading: string;
//     subheading: string;
//     description: string;
//     genre: string;
//     location: string;
//     time: string;
//     uploadMedia: string;
// }

// const SubmissionForm: React.FC = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState<FormData>({
//         heading: '',
//         subheading: '',
//         description: '',
//         genre: '',
//         location: '',
//         time: '',
//         uploadMedia: ''
//     });

//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log('Form Data Submitted:', formData);

//         axios.post<{ msg: string }>('http://localhost:8000/api/createarticles', formData)
//             .then(response => {
//                 toast.success(response.data.msg, { position: "top-right" });
//                 navigate('/dashboard');
//             })
//             .catch(error => console.error(error));
//     };

//     const handleCancel = () => {
//         // reset formData state to initial values
//         setFormData({
//             heading: '',
//             subheading: '',
//             description: '',
//             genre: '',
//             location: '',
//             time: '',
//             uploadMedia: ''
//         });

//         // navigate to the previous page or a specific route
//         navigate('/');
//     };

//     return (
//         <div className='fullForm'>
//             <form className="submission-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         name="heading"
//                         value={formData.heading}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Subheading</label>
//                     <input
//                         type="text"
//                         name="subheading"
//                         value={formData.subheading}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Description</label>
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Genre</label>
//                     <input
//                         type="text"
//                         name="genre"
//                         value={formData.genre}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Location</label>
//                     <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Time</label>
//                     <input
//                         type="text"
//                         name="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Link</label>
//                     <input
//                         type="text"
//                         name="uploadMedia"
//                         value={formData.uploadMedia}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="form-actions">
//                     <button type="button" onClick={handleCancel}>Cancel</button>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SubmissionForm;



import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../../scss/SubmissionForm.scss';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface FormData {
    heading: string;
    subheading: string;
    description: string;
    genre: string;
    location: string;
    time: string;
    uploadMedia: string;
}

const SubmissionForm: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        heading: '',
        subheading: '',
        description: '',
        genre: '',
        location: '',
        time: '',
        uploadMedia: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        axios.post<{ msg: string }>('http://localhost:8000/api/createarticles', formData)
            .then(response => {
                toast.success(response.data.msg, { position: "top-right" });
                navigate('/dashboard');
            })
            .catch(error => console.error(error));
    };

    const handleCancel = () => {
        // reset formData state to initial values
        setFormData({
            heading: '',
            subheading: '',
            description: '',
            genre: '',
            location: '',
            time: '',
            uploadMedia: ''
        });

        // navigate to the previous page or a specific route
        navigate('/');
    };

    return (
        <div className='fullForm'>
            <form className="submission-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Subheading</label>
                    <input
                        type="text"
                        name="subheading"
                        value={formData.subheading}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Link</label>
                    <input
                        type="text"
                        name="uploadMedia"
                        value={formData.uploadMedia}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-actions">
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SubmissionForm;