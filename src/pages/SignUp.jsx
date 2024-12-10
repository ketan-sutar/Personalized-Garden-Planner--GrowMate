import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();

  // State variables for form inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if the user has agreed to terms
    if (!agreed) {
      toast.error("You must agree to the terms and conditions.", {
        position: "top-center",
      });
      return;
    }

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update user's display name
      await updateProfile(user, { displayName: name });

      // Save user details in Firestore
      await setDoc(doc(db, "Users", user.uid), {
        userEmail: user.email,
        userName: name,
        userPass: password,
      });

      // Success notification and navigation
      toast.success("User Registered Successfully", { position: "top-center" });
      navigate("/main");
    } catch (error) {
      console.error("Registration Error:", error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <section className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          Nice to meet you! Enter your details to sign up. 😊
        </Typography>

        <form
          onSubmit={handleRegister}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="flex flex-col gap-6">
            <Input
              size="lg"
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <Input
              size="lg"
              label="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            label={
              <Typography variant="small" color="gray">
                I agree to the
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button className="mt-6" fullWidth type="submit">
            Sign Up
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a
              href="/Login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Log In
            </a>
          </Typography>
        </form>
      </Card>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
