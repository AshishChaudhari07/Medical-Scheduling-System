import {v2 as cloudinary} from 'cloudinary';

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME || 'dzxcjemcw',
        api_key: process.env.CLOUDINARY_API_KEY || '468331896595557',
        api_secret: process.env.CLOUDINARY_SECRET_KEY || 'ythzKHgEE0QgsYslBdjNM5BaYkg'
    });
};

export default connectCloudinary;
