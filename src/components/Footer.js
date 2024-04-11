import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

const Footer = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  return (
    <div
      className={
        "bg-black text-gray-400 flex gap-6 justify-center flex-wrap mx-auto p-6 relative z-30 " +
        (showGptSearch || !user ? "bg-opacity-80" : "")
      }
    >
      <h1>Created by @Vihar Shah</h1>
      <p className="lg:w-6/12 text-xs sm:text-sm">
        This is an academic project. All the movies displayed here are fetched
        from TMDB API. Also, Open AI API is integrated to leverage the powers of
        OPEN AI which is used by tools like ChatGPT. If the movies do not get
        displayed, please try to refresh the page as th API response sometimes
        return 404. Authentication is done using Firebase. The documentation
        regarding the project is provided on Github. Hope, you like the project
        :-)
      </p>
      <ul>
        My social media handles
        <li>
          <Link
            to={"https://www.linkedin.com/in/vihar-shah-4b63971a9/"}
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mx-1" />
            Linkedin
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="mx-1" />
          <Link to={"https://github.com/vihar2712"} className="hover:underline">
            Github
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
