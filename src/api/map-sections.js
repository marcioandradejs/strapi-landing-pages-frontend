export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grid = [] } = '' } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        // return mapImageGrid(section);
      }

      return section;
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  // {
  //   "__component": "section.section-content",
  //   "_id": "602fdf2d540c00269e056173",
  //   "title": "news coverage and some surprises",
  //   "content": "<p>The release of Apple Silicon-based.</p>",
  //   "metadata": {
  //     "background": false,
  //     "_id": "602fdf2d540c00269e05617a",
  //     "name": "intro",
  //     "section_id": "intro",
  //     "__v": 0,
  //     "id": "602fdf2d540c00269e05617a"
  //   },
  //   "__v": 1,
  //   "id": "602fdf2d540c00269e056173"
  // },
  // {
  //   "__component": "section.section-grid",
  //   "_id": "602fdf2d540c00269e056174",
  //   "description": "Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut",
  //   "title": "My Grid",
  //   "text_grid": [
  //     {
  //       "_id": "602fdf2d540c00269e05617c",
  //       "title": "Teste 1",
  //       "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
  //       "__v": 0,
  //       "id": "602fdf2d540c00269e05617c"
  //     },
  //     {
  //       "_id": "602fdf2d540c00269e05617d",
  //       "title": "Teste 2",
  //       "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
  //       "__v": 0,
  //       "id": "602fdf2d540c00269e05617d"
  //     },
  //     {
  //       "_id": "602fdf2d540c00269e05617e",
  //       "title": "Teste 3",
  //       "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
  //       "__v": 0,
  //       "id": "602fdf2d540c00269e05617e"
  //     }
  //   ],
  //   "image_grid": [],
  //   "metadata": {
  //     "background": true,
  //     "_id": "602fdf2e540c00269e056199",
  //     "name": "grid-one",
  //     "section_id": "grid-one",
  //     "__v": 0,
  //     "id": "602fdf2e540c00269e056199"
  //   },
  //   "__v": 2,
  //   "id": "602fdf2d540c00269e056174"
  // }
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid,
  };
};
