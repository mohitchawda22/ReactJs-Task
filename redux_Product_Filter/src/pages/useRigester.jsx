import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useRigester = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const existingUser = JSON.parse(localStorage.getItem('users')) || [];
        const userExsists = existingUser.find(user => user.email === formData.email)

        if (userExsists) {
            toast.info('User already exists. Redirecting to Login page...');
            navigate('/login');
            return;
        }

        if (
            !formData.fullName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            toast.error('Please fill all the fields!');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.warning('Passwords do not match!');
            return;
        }

        existingUser.push({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
        });

        localStorage.setItem('users', JSON.stringify(existingUser));
        toast.success('Registration successful! Please login.');
        navigate('/login');
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    return {
        formData, handleChange, handleRegister
    }
}



