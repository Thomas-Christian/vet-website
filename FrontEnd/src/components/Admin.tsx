import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

export default function Admin() {

  const currentUser = useContext(CurrentUser);
  let hasUser = true

    // if ( currentUser != null ) {
    //   hasUser = false
    // }

  const navigate = useNavigate()

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    //console.log(item)
    await fetch(`${process.env.REACT_APP_SERVER_URL}/api/organizations/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(org),
    });

    navigate("/");
  }

  const [org, setOrg] = useState({
    name: "",
    website: "",
    image: "",
    mission: "",
    tags: [undefined],
  });

  const tagSet = new Set();

  const tagHandler = (e: any) => {
    const htmlTags = e.target.parentElement.parentElement.children;

    //console.log(htmlTags)

    if (htmlTags) {
      for (var i = 1; i < htmlTags.length; i++) {
        processTags(htmlTags[i]);
      }

      const tagsArray: any[] = Array.from(tagSet);

      //console.log(tagsArray)

      setOrg({ ...org, tags: tagsArray });
    }
  };

  const processTags = (tag: any) => {
    //console.log(tag.control.checked)

    if (tag.control.checked) {
      tagSet.add(tag.id);
    } else if (!tag.control.checked) {
      tagSet.delete(tag.id);
    }

    //imageArray.push(fileContent)
  };

  const possibleTags = [
    "Mentor",
    "Community",
    "Purpose",
    "Mental Health",
    "Career Counseling",
    "Rehabilitative Care",
    "Expeditions",
    "Employment",
    "Transition"
  ]
    return (
      <>
      {hasUser
      ?
        <div id="Admin" className="min-w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="m-4 p-2 w-[50%] bg-slate-200 rounded-md"
      >
        <div className="form-group w-full flex flex-col">
          <label htmlFor="org-title" className="form-label-style">
            Organization Name:
          </label>
          <input
            required
            value={org.name}
            onChange={(e) => setOrg({ ...org, name: e.target.value })}
            id="org-name"
            className="form-input-style"
          />
        </div>

        <div className="form-group w-full flex flex-col">
          <label htmlFor="org-site" className="w-3/5 form-label-style">
            Organization Website:
          </label>
          <input
            required
            value={org.website}
            onChange={(e) => setOrg({ ...org, website: e.target.value })}
            id="org-site"
            className="form-input-style"
          />
        </div>

        <div className="form-group w-full flex flex-col">
          <label htmlFor="org-img" className="form-label-style">
            Organization Image:
          </label>
          <input
            required
            value={org.image}
            onChange={(e) => setOrg({ ...org, image: e.target.value })}
            id="org-name"
            className="form-input-style"
          />
        </div>

        <div className="form-group w-full flex flex-col">
          <label htmlFor="org-title" className="form-label-style">
            Organization Mission:
          </label>
          <input
            required
            value={org.mission}
            onChange={(e) => setOrg({ ...org, mission: e.target.value })}
            id="org-name"
            className="form-input-style"
          />
        </div>

        <div
          onChange={(e) => tagHandler(e)}
          className="form-group w-full flex flex-col"
          id="org-tags"
        >
          <label htmlFor="org-tags" className="form-label-style">
            Organization Tags:
          </label>

          <div className="flex flex-row flex-wrap w-full justify-between">
          { possibleTags.map((item: string) => (
              <label className="form-input-style w-[12rem]" id={item} key={item}>
                <input required multiple type="checkbox" className="mx-2" value={`${item}`} />
                 {item}
              </label>
            ))}

          </div>

          {/* <label className="form-input-style" id="education">
            <input required multiple type="checkbox" value={"Education"} />{" "}
            Education{" "}
          </label> */}
        </div>

        <div className="flex">
          <button className="btn-primary bg-stone-400" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
        </div>
      :
          <h1 className="flex justify-center"> :3 </h1>
      }
      </>
  );



}
