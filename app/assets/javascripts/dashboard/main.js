/**
 * Dashboard, shown after user is logged in.
 * dashboard/main.js is the entry module which serves as an entry point so other modules only have
 * to include a single module.
 */
define(["angular", "./routes", "./controllers"], function(angular, routes, controllers) {
  return angular.module("yourprefix.dashboard", ["dashboard.routes"]);
});