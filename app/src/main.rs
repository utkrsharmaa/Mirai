use mirai::app::App;

#[tokio::main]
async fn main() -> eframe::Result<()> {
    let native_options = eframe::NativeOptions::default();
    eframe::run_native(
        "Mirai",
        native_options,
        Box::new(|cc| {
            re_ui::apply_style_and_install_loaders(&cc.egui_ctx);
            egui_material_icons::initialize(&cc.egui_ctx);
            // Defining color theme
            Ok(Box::new(App::new(cc)) as Box<dyn eframe::App>)
        }),
    )
}
