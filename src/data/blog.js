import logo from "../assets/logo";

const blogData = {
  name: "My Personal Blog",
  image: logo,
  about: "Welcome to my blog",
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never difficult",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

export default blogData;
