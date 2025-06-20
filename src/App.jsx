import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import PageNotFound from './pages/PageNotFound';

const BASE_URL = 'http://localhost:9000';

function App() {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(function () {
		async function fetchCities() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities`);
				console.log(`res data: ${res}`);

				const data = await res.json();
				console.log(`cities data: ${data}`);
				setCities(data);
			} catch (error) {
				console.log('Something went wrong: ', error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchCities();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="login" element={<Login />} />
				<Route path="app" element={<AppLayout />}>
					<Route index element={<Navigate replace to="cities" />} />
					<Route
						path="cities"
						element={
							<CityList cities={cities} isLoading={isLoading} />
						}
					/>
					<Route path="cities/:id" element={<City />} />
					<Route
						path="countries"
						element={
							<CountryList
								cities={cities}
								isLoading={isLoading}
							/>
						}
					/>
					<Route path="form" element={<Form />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
