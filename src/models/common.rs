use serde::Deserialize;
use std::collections::HashMap;

#[derive(Debug, Deserialize)]
pub struct Manga {
    pub id: String,
    pub attributes: MangaAttribute,
    pub relationships: Vec<Relationship>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct MangaAttribute {
    pub title: HashMap<String, String>,
    pub alt_titles: Vec<HashMap<String, String>>, // an array of "objects"
    pub description: HashMap<String, String>,
    pub links: HashMap<String, String>,
    pub original_language: String,
    pub publication_demographic: Option<Demographic>,
    pub status: Status,
    pub year: Option<u16>,
    pub content_rating: ContentRating,
    pub tags: Vec<Tag>,
    pub chapter_number_reset_on_new_volume: bool, // for volume and chapter sorting for bigger titles
    pub available_translated_languages: Vec<String>,
    pub latest_uploaded_chapter: String,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Demographic {
    Shounen,
    Shoujo,
    Josei,
    Seinen,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Status {
    Completed,
    Ongoing,
    Cancelled,
    Hiatus,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum ContentRating {
    Safe,
    Suggestive,
    Erotica,
    Pornographic,
}

#[derive(Debug, Deserialize)]
pub struct Tag {
    pub id: String,
    pub attributes: TagAttributes,
}

#[derive(Debug, Deserialize)]
pub struct TagAttributes {
    pub name: HashMap<String, String>,
    pub group: TagGroup,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum TagGroup {
    Content,
    Format,
    Genre,
    Theme,
}

#[derive(Debug, Deserialize)]
pub struct Relationship {
    pub id: String,
    #[serde(rename = "type")]
    pub relationship_type: RelationshipType,
    pub attributes: Option<RelationshipAttributes>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum RelationshipType {
    Author,
    Artist,
    CoverArt,
}

#[derive(Debug, Deserialize)]
#[serde(untagged)]
pub enum RelationshipAttributes {
    Author(AuthorAttributes),
    CoverArt(CoverArtAttributes),
}

#[derive(Debug, Deserialize)]
pub struct AuthorAttributes {
    pub name: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct CoverArtAttributes {
    #[serde(rename = "fileName")]
    pub file_name: Option<String>,
    pub locale: Option<String>,
}
