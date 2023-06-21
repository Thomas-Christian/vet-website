import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser"

export default function LoginForm() {

  const currentUser = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    firstName: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);

    const response = await fetch(`http://localhost:5000/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.status !== 200) {
      setErrorMessage(true);
      setLoading(false);
    }

    if (response.status === 200) {
      await currentUser?.setCurrentUser(data.user);
      setLoading(false);
      navigate("/");
    }

  }

  while (loading) {
    return (
      <div className="flex flex-col h-screen md:pl-[4.48rem] pl-[3rem] items-center justify-center px-6 py-8">
        <h1 className="text-4xl font-lily-script tracking-wide text-center text-primary font-bold p-3 ">
          Loading
        </h1>
        <FontAwesomeIcon
          className="animate-spin-slow text-quaternary"
          icon={faCircleNotch}
          fixedWidth
          size="2xl"
        />
      </div>
    );
  }

  while (errorMessage) {
    return (
      <div className="flex flex-col h-screen md:pl-[4.48rem] pl-[3rem] items-center justify-center px-6 py-8">
        <h1 className="text-4xl font-lily-script tracking-wide text-center text-primary font-bold p-3 ">
          Uh oh something went wrong.
        </h1>
        <p>
          Please make sure your email and password are correct
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen ml-[4.48rem] items-center justify-center px-6 py-8">
      <div className="w-full bg-primary rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
        <h1 className="text-xl text-center font-bold p-2 text-secondary md:text-2xl">
          Sign in
        </h1>

        <form className="m-2 p-2 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="username" className="form-label-style">
            Name:
          </label>

          <input
            required
            type="text"
            id="username"
            name="username"
            value={credentials.firstName}
            onChange={(e) =>
              setCredentials({ ...credentials, firstName: e.target.value })
            }
            className="form-input-style"
            placeholder="John Smith"
          ></input>

          <label htmlFor="password" className="form-label-style">
            Password:
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="form-input-style"
            placeholder="••••••••"
          />

          <div className="flex">
            <button type="submit" className="btn-primary">
              Let's Go!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
