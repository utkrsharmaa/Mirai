use crate::app::{Screen, Source, View};
use eframe::egui::{self, FontFamily, FontId, Frame, Margin};
use egui_material_icons::icons::{ICON_GRID_VIEW, ICON_LISTS, ICON_VIEW_COMPACT};

pub fn render(ctx: &egui::Context, screen: &mut Screen, source: &mut Source, view: &mut View) {
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
            ui.horizontal(|ui| {
                egui::ComboBox::from_label("Source")
                    .selected_text(format!("{:?}", source))
                    .show_ui(ui, |ui| {
                        ui.selectable_value(source, Source::Mangadex, "Mangadex");
                        ui.selectable_value(source, Source::Komiko, "Komiko");
                        ui.selectable_value(source, Source::Global, "Global");
                    });
                ui.with_layout(egui::Layout::right_to_left(egui::Align::Center), |ui| {
                    match view {
                        View::Thumbnail => {
                            ui.label(egui::RichText::new(ICON_GRID_VIEW).size(18.0));
                        }
                        View::List => {
                            ui.label(egui::RichText::new(ICON_LISTS).size(18.0));
                        }
                        View::Compact => {
                            ui.label(egui::RichText::new(ICON_VIEW_COMPACT).size(18.0));
                        }
                    }
                    egui::ComboBox::from_label("")
                        .selected_text(format!("{:?}", view))
                        .show_ui(ui, |ui| {
                            ui.selectable_value(view, View::Compact, "Compact");
                            ui.selectable_value(view, View::List, "List");
                            ui.selectable_value(view, View::Thumbnail, "Thumbnail");
                        })
                })
            })
        });
}
