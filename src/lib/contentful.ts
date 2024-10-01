import contentful from "contentful"; // Mengimpor client untuk runtime
import type { EntryFieldTypes } from "contentful"; // Mengimpor hanya tipe

export interface BlogPost {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: {
      sys: {
        id: string;
        linkType: 'Asset';
        type: 'Link';
      };
    };
  };
}
export interface Product {
  contentTypeId: 'product';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    price: EntryFieldTypes.Number;
    content: EntryFieldTypes.Text;
    spesifikasi: EntryFieldTypes.Text;
  };
}
export interface Produkcctv {
  contentTypeId: 'produkcctv';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    price: EntryFieldTypes.Number;
    content: EntryFieldTypes.Text;
    spesifikasi: EntryFieldTypes.Text;
    imagespek?:EntryFieldTypes.AssetLink;
  };
}

export interface proyekkami {
  contentTypeId: 'proyekkami';
  fields: {
    title: EntryFieldTypes.Text;
    image: {
      sys: {
        id: string;
        linkType: 'Asset';
        type: 'Link';
      };
    };
  };
}


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
