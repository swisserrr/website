import merge from 'lodash/merge';

export default async function handler(req, res) {
  const query = req.query;
  const { searchtitle } = query;
  //   const searchFields = [];
  try {
    const searchPosts = await fetch(
      `https://testing.emoha.com/blogs/wp-json/wp/v2/posts?search='${searchtitle}'&_fields[]=title&_fields[]=categories&_fields[]=slug`
    );
    const resolvedPosts = await searchPosts.json();
    const postsCategories = resolvedPosts.map(async obj => {
      return await fetch(`https://testing.emoha.com/blogs/wp-json/wp/v2/categories/${obj.categories[0]}`).then(data =>
        data.json()
      );
    });
    const resolvedCategories = await Promise.all(postsCategories);
    const filteredCategories = resolvedCategories.map(user => ({ catData: user.slug }));
    const mergedCategories = merge(resolvedPosts, filteredCategories);
    const finalMergedData = mergedCategories.map(user => ({
      href: `/${user.catData}/${user.slug}`,
      title: user.title.rendered,
    }));
    res.json({ data: finalMergedData });
  } catch {
    res.json({ data: 'errrrrrr' });
  }
}
