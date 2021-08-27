import P from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = ({ children }) => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Error 404 - Página não encontrada. <a href="/">Clique para voltar</a></p>'
    />
  );
};
