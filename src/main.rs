use gtk::{Application, glib};
use gtk::{ApplicationWindow, prelude::*};

const APP_ID: &str = "org.gtk_rs.Mirai";

fn main() -> glib::ExitCode {
    let app = Application::builder().application_id(APP_ID).build();
    app.connect_activate(ui);
    app.run()
}

fn ui(app: &Application) {
    let window = ApplicationWindow::builder()
        .application(app)
        .title("Mirai")
        .build();
    window.present();
}
