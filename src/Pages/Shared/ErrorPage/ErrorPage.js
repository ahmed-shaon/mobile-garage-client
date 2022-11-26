import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ErrorPage = () => {
    const {userLogout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleErrorPage = () => {
        userLogout()
        .then(() => {
            navigate('/');
        })
        .catch(err => console.log(err))
    }
    return (
        <section className="flex items-center h-full p-16 bg-gray-200">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <button onClick={handleErrorPage} className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</button>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;