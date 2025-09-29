use gtk::Window;
use gtk::builders::ApplicationBuilder;
use gtk::prelude::*;
use gtk::{Application, ApplicationWindow};

pub fn app(application: &Application) {
    let window = ApplicationWindow::builder()
        .application(application)
        .title("Mirai")
        .width_request(600)
        .build();

    window.present();
}
