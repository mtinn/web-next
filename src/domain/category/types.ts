export type Category = {
  id: string;
  name: string;
  slug: string;
  absoluteSlug: string;
  categoryTrackingString: string;
  personalizationId: string;
  tags: Array<string>;
  cities: Array<string>;
  visuals: {
    period: {};
    tabColor: string;
    backgroundImage?: {
      type: string;
      size: {
        width: number;
        height: number;
      };
      items: {
        xxsmall: string;
        xsmall: string;
        small: string;
        normal: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
      urlWithVariables: string;
    };
    icon?: {
      type: string;
      size: {
        width: number;
        height: number;
      };
      items: {
        xxsmall: string;
        xsmall: string;
        small: string;
        normal: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
      urlWithVariables: string;
    };
  };
  categories: Array<Category>;
};
