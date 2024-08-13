interface Tag {
  id: string,
  attributes: {
    name: {
      en: string;
    }
  }
}

interface Attributes {
  title: {
    en: string;
  },
  altTitle: AltTitle[];
  description: {
    en: string;
  }
  publicationDemographic: string,
  status: string,
  year: number | string,
  contentRating: string,
  tags: Tag,
  state: string,
  latestUploadedChapter: string,
}

interface AltTitle {
  [key: string]: string;
}

export const filterAttributes = (attributes: any ): Attributes => {
  console.log("attributes filtering")
  return attributes = {
    title: attributes.title.en,
    description: attributes.description.en,
    altTitle: attributes.altTitles.filter((altTitle: AltTitle) => 
      Object.keys(altTitle).includes(attributes.originalLanguage)
    ).map((altTitle: AltTitle) => altTitle[attributes.originalLanguage]), // Extracting the title based on language
    publicationDemographic: attributes.publicationDemographic,
    tags: attributes.tags.map((tag: any) => tag.attributes.name.en), // Accessing the 'en' property of 'name'
    status: attributes.status,
    year: attributes.year,
    contentRating: attributes. contentRating,
    state: attributes.state,
    latestUploadedChapter: attributes.latestUploadedChapter,
  };
};

type Relationship = {
  attributes: any;
  type: string;
  id: string;
};

type Relationships = {
  author: {
    id: string,
    attributes: {
      name: string
    }
  };
  artist: {
    id: string,
    attributes: {
      name: string
    }
  };
  cover_art: {
    id: string,
    attributes: {
      coverUrl: string;
      fileName: string
    }
  };
};

export const filterRelationships = (relationships: Relationship[], id: string): Relationships => {
  console.log("relationships filtering");

  // Initialize an empty object for the filtered relationships
  const filteredRelationships: Relationships = {
    author: {
      id: "",
      attributes: {
        name: ""
      }
    },
    artist: {
      id: "",
      attributes: {
        name: ""
      }
    },
    cover_art: {
      id: "",
      attributes: {
        fileName: "",
        coverUrl: ""
      }
    }
  };

  // Loop through the array and extract ids for the desired types
  relationships.forEach((relationship) => {
    if (relationship.type === 'author') {
      filteredRelationships.author.id = relationship.id;
      filteredRelationships.author.attributes.name = relationship.attributes.name;
    } else if (relationship.type === 'artist') {
      filteredRelationships.artist.id = relationship.id;
      filteredRelationships.artist.attributes.name = relationship.attributes.name;
    } else if (relationship.type === 'cover_art') {
      filteredRelationships.cover_art.id = relationship.id;
      filteredRelationships.cover_art.attributes.fileName = relationship.attributes.fileName;
    }
  });

  const mangaId = id;
  const fileName = filteredRelationships.cover_art.attributes.fileName;
  const coverURL = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;
  filteredRelationships.cover_art.attributes.coverUrl = coverURL;
  return filteredRelationships;
};