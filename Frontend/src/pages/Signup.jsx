import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SignupService from "../services/signup.service";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import Svgp from "../components/Login/Svgp";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Signup = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    role: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { confirm_password, ...data } = formData;

    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const response = await SignupService.Signup(data);
      if (response.status === 201) {
        toast.success("Successfully registered");
        Navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    for (const key in data) {
      if (data[key] === "") {
        errors[key] = `${key.replace("_", " ")} is required`;
      }
    }

    if (data.password !== data.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
        <Svgp className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl font-semibold mt-0 mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-2">
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            size="small"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            error={!!formErrors.first_name}
            helperText={formErrors.first_name}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            size="small"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            error={!!formErrors.last_name}
            helperText={formErrors.last_name}
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            size="small"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={!!formErrors.username}
            helperText={formErrors.username}
          />
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="recruiter">Recruiter</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            size="small"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            error={!!formErrors.phone_number}
            helperText={formErrors.phone_number}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
            InputProps={{
              endAdornment: (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ),
            }}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Confirm Password"
            variant="outlined"
            fullWidth
            size="small"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            error={!!formErrors.confirm_password}
            helperText={formErrors.confirm_password}
            InputProps={{
              endAdornment: (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <NavLink to="/login" className="text-blue-500">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
