use crate::app::{Screen, View};
use eframe::egui::{self, Frame, Margin};

pub fn render(ctx: &egui::Context, screen: &mut Screen) {
    // Top Panel for navigaton
    egui::TopBottomPanel::top("navigaton")
        .min_height(40.0)
        .show_separator_line(false)
        .frame(Frame {
            inner_margin: Margin::same(12),
            ..Default::default()
        })
        .show(ctx, |ui| {
            ui.horizontal(|ui| {
                ui.add(egui::Label::new(
                    egui::RichText::new("Mirai")
                        .heading()
                        .size(32.0)
                        .color(egui::Color32::from_rgb(255, 0, 145)),
                ));
                ui.with_layout(egui::Layout::right_to_left(egui::Align::Center), |ui| {
                    if ui
                        .add(
                            egui::Label::new(
                                egui::RichText::new("Settings")
                                    .heading()
                                    .size(24.0)
                                    .strong()
                                    .color(egui::Color32::from_rgb(255, 0, 145)),
                            )
                            .selectable(false)
                            .sense(egui::Sense::click()),
                        )
                        .clicked()
                    {
                        *screen = Screen::Settings
                    };
                    ui.add_space(7.0);
                    if ui
                        .add(
                            egui::Label::new(
                                egui::RichText::new("Library")
                                    .heading()
                                    .size(24.0)
                                    .strong()
                                    .color(egui::Color32::from_rgb(255, 0, 145)),
                            )
                            .selectable(false)
                            .sense(egui::Sense::click()),
                        )
                        .clicked()
                    {
                        *screen = Screen::Library
                    };
                    ui.add_space(7.0);
                    if ui
                        .add(
                            egui::Label::new(
                                egui::RichText::new("Home")
                                    .heading()
                                    .size(24.0)
                                    .strong()
                                    .color(egui::Color32::from_rgb(255, 0, 145)),
                            )
                            .selectable(false)
                            .sense(egui::Sense::click()),
                        )
                        .clicked()
                    {
                        *screen = Screen::Home
                    };
                })
            })
        });
    // Central Panel for main content
    egui::CentralPanel::default()
        .frame(Frame {
            inner_margin: Margin::same(12),
            ..Default::default()
        })
        .show(ctx, |ui| {
            ui.with_layout(
                egui::Layout::centered_and_justified(egui::Direction::LeftToRight),
                |ui| ui.label("Settings"),
            )
        });
}
