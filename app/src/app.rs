use eframe::egui;

use crate::ui;
//format to import icons
//use egui_material_icons::icons::{ICON_SEARCH as Search, ICON_SWAP_VERT as Swap};

pub struct App {
    //current_manga: Option<Manga>,
    //current_page: u16,
    screen: Screen,
    source: Source,
    view: View,
}

#[derive(PartialEq)]
pub enum Screen {
    Home,
    Reader,
    Settings,
    Library,
}

#[derive(Debug, PartialEq)]
pub enum Source {
    Global,
    Mangadex,
    Komiko,
}

#[derive(Debug, PartialEq)]
pub enum View {
    Compact,
    List,
    Thumbnail,
}

impl App {
    pub fn new(cc: &eframe::CreationContext<'_>) -> Self {
        Self {
            //current_page: 0,
            //current_manga: None,
            screen: Screen::Home,
            source: Source::Global,
            view: View::Thumbnail,
        }
    }
}

impl eframe::App for App {
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        match self.screen {
            Screen::Home => {
                ui::home::render(ctx, &mut self.screen, &mut self.source, &mut self.view);
            }
            Screen::Library => {
                ui::library::render(ctx, &mut self.screen);
            }
            Screen::Settings => {
                ui::settings::render(ctx, &mut self.screen);
            }
            Screen::Reader => {}
        }
    }
}
