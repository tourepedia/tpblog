import angular from "angular";
import uirouter from "angular-ui-router";

import authorProfileRoutes from "./author.profile.routes";
import authorProfileController from "./author.profile.controller";

export default angular.module("Author.Profile", [uirouter])
  .config(authorProfileRoutes)
  .controller("AuthorProfileController", authorProfileController)
  .name;
