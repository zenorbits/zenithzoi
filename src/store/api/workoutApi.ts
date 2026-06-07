import { Workout } from "@/models/workout";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const workoutApi = createApi({
    reducerPath: 'workoutApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Workout'],
    endpoints: (builder) => ({
        getWorkouts: builder.query<Workout[], void>({
            query: () => '/workouts',
            providesTags: ['Workout'],
        }),

        addWorkout: builder.mutation<{ id: string }, Partial<Workout>>({
            query: (body) => ({
                url: '/workouts',
                method: "POST",
                body,
            }),
            invalidatesTags: ["Workout"],
        }),
        deleteWorkout: builder.mutation<{ success: boolean }, string>({
            query: (id) => ({
                url: `/workouts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Workout"],
        })
    })

})


export const {
    useGetWorkoutsQuery,
    useAddWorkoutMutation,
    useDeleteWorkoutMutation,
} = workoutApi;