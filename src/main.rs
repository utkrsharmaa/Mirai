#![allow(unused)]
use gtk::Application;
use gtk::glib;
use gtk::prelude::*;

mod application;
mod backend;
mod models;

use crate::application::app::app;

const APP_ID: &str = "com.utkrsharmaa.Mirai";

fn main() -> glib::ExitCode {
    let root = Application::builder().application_id(APP_ID).build();
    root.connect_activate(app);
    root.run()
}
