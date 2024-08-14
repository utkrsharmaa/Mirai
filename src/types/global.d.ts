type SortOrder = "asc" | "desc";

type SortOptions = {
  title?: SortOrder;
  year?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  latestUploadedChapter?: SortOrder; // Default value "desc"
  followedCount?: SortOrder;
  relevance?: SortOrder;
  rating?: SortOrder;
};

type publicationDemographic = "shounen" | "shoujo" | "josei" | "seinen";
type status = "ongoing" | "completed" | "hiatus" | "cancelled";
type contentRating = "safe" | "suggestive" | "erotica" | "pornographic";

type Filters = {
  publicationDemographic?: publicationDemographic[];
  status?: status[];
  contentRating?: contentRating[]; 
}

type SearchOptions = {
  title?: string;
  includedTagNames?: string[];
  excludedTagNames?: string[];
  filters?: Filters,
  order?: SortOptions,
}

type Tag = {
  id: string;
  attributes: {
    name: {
      en: string;
    };
  };
};

type AltTitle = {
  [key: string]: string;
}

type Attributes = {
  title: {
    en: string;
  },
  altTitle: AltTitle[];
  description: {
    en: string;
  }
  originalLanguage: string,
  publicationDemographic: string,
  status: string,
  year: number | string,
  contentRating: string,
  tags: Tag,
  state: string,
  latestUploadedChapter: string,
}

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

type Manga = {
  id: string,
  attributes: Attributes,
  relationships: Relationships,
}

