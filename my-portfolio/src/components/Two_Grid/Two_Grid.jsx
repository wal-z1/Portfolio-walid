import Skills from "../Skills/Skills";
import Timeline_container from "../Time-line/Timeline_container";

function Two_grid() {
	return (
		<div /*  */
			className="
      max-w-7xl mx-auto px-8 py-16   
      grid                            
      grid-cols-1                     
      lg:grid-cols-2                 
      gap-16                          
    ">
			<div>
				<Skills />
			</div>

			<div>
				<Timeline_container />
			</div>
		</div>
	);
}
export default Two_grid;
