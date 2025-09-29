use crate::models::common::Manga;
use serde::Deserialize;
use std::usize;

#[derive(Debug, Deserialize)]
pub struct MdxError {
    pub id: String,
    pub status: u16,
    pub title: String,
    pub detail: Option<String>,
    pub context: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(tag = "result")]
pub enum MdxResp {
    #[serde(rename = "ok")]
    Ok {
        response: String,
        data: Vec<Manga>,
        limit: u8,
        offset: u8,
        total: usize,
    },
    #[serde(rename = "error")]
    Error { errors: Vec<MdxError> },
}
