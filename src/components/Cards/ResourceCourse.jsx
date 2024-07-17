import React, { useState } from 'react';

const ResourceCourse = ({course , setBool}) => {

    const [boolset , setBoool] = useState(false)
  return (

        true ? (
		<div>
			{/* map on subject array and displaying its name */}
			{course.map((subject) => {
				return (
					<div key={subject.id} className="ml-24">
						<div className="bg-gray-500 h-20 w-40 rounded-sm flex items-center justify-center">
							<h2 className="text-Black text-center justify-cente text-2xl ">
								<iframe
									// width="560"
									// height="315"
									src="https://www.youtube.com/embed/6_gXiBe9y9A?si=BIwAK9N8cDGH1imV"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe>
							</h2>
						</div>
						<div className="h-24 text-3xl mt-10 pr-36">
                            From A-F
                        </div>
					</div>
				);
			})}
		</div>) : ( <div className='text-3xl'> Enroll first To see <br/>the courses </div> )
	);
}

export default ResourceCourse;
