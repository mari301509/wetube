export const home = (req, res) => res.render('home');
export const search = (req, res) => {
  const { term: searchingBy } = req.query;
  res.render('search', { pageTitle : 'search', searchingBy });
};
