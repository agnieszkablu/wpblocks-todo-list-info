import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit() {
	const data = useSelect( ( select ) => {
		const store = select('blocks/todos');
		if ( ! store ) return null;
		return {
			total: store.getTodosNumber(),
			done: store.getDoneTodos(),
			pending: store.getUnDoneTodos(),
		};
	} );
	return (
		<div { ...useBlockProps() }>
			{!data && <p>{ __( 'Please make sure the plugin is active', 'todo-list-info' ) }</p> }
			{data && (
				<ul>
					<li>{ __( 'Total todos:', 'todo-list-info' ) }{ data.total }</li>
					<li>{ __( 'Done todos:', 'todo-list-info' ) }{ data.done }</li>
					<li>{ __( 'Pending todos:', 'todo-list-info' ) }{ data.pending }</li>
				</ul>
			)}
		</div>
	);
}
